from ..db.db import cmd, connection
from .._utils import create_obj
import datetime

def create_score(userid, score=0, leavel=0, dead_dragons = 0, dead_mash = 0):
  createdAt = datetime.datetime.now()
  return create_obj("score", f"'{userid}', '{score}', '{dead_dragons}', '{dead_mash}' , '{leavel}', '{createdAt}' ")

def get_score_by_id(id):
  cmd.execute(f"select * from score where id = '{id}' ")
  try:
    score = cmd.fetchall()[0]
    score["createdAt"] = score["createdAt"].isoformat()
    return score
  except:
    return {};

def get_score_by_user_id(user_id):
  cmd.execute(f"select * from score where user_id = '{user_id}' ")
  try:
    score = cmd.fetchall()[0]
    score["createdAt"] = score["createdAt"].isoformat()
    score_position = get_score_position(score["score"])
    score["position"] = score_position
    return score
  except Exception as ex:
    print(f" Erro ao pegar socre {ex}")
    return {
      "score": 0,
      "dead_dragons": 0,
      "dead_mash": 0,
      "leavel": 0,
      "createdAt": datetime.datetime.now().isoformat(),
      "position": 0
    };



def get_score_position(score):
  cmd.execute(f" select count(*) as total from score where score > '{score}' ")
  score_position = cmd.fetchall()[0]
  score_position = int(score_position["total"]) + 1
  return score_position

def get_all_scores():
  cmd.execute(f"select * from score order by score desc limit 10000")
  scores = cmd.fetchall()
  for score in scores:
    score["createdAt"] = score["createdAt"].isoformat()
  return scores

def delete_score(id):
  cmd.execute(f" delete from score where id='{id}' ")
  connection.commit()

def delete_score_by_user(user_id):
  cmd.execute(f" delete from score where id='{user_id}' ")
  connection.commit()

def update_score(id, values):
  cmd.execute(f"update score set {values} where id='{id}'")
  connection.commit()

#create_score("'luis Marques'")
