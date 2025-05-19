from ..db.db import cmd


cmd.execute(""" 
    create table if not exists user(
                  id char(36) primary key,
            name varchar(100),
            nicname varchar(100)

            )
            
            
            """)
cmd.execute(""" 
  create table if not exists contacts (
  id char(36) primary key, 
  user_id char(36),
  phone varchar(20),
  foreign key (user_id) references user(id)
  )
""")





cmd.execute(
  """
  create table if not exists account(
    id char(36) primary key,
    user_id char(36),
    email varchar(200) unique,
    password varchar(200),
    image varchar(500),
    leavel enum('0','1') default '0' not null,
    status enum('0', '1') default '0' not null,
    foreign key (user_id) references user(id)
  )
"""
)

cmd.execute(
  """
  create table if not exists session(
  id char(36) primary key,
  user_id char(36),
  createdAt datetime,
  expireAt datetime,
  foreign key (user_id) references user(id)
  )
"""
)


cmd.execute(
  """
  create table if not exists request(
    id char(36) primary key,
    user_id char(36),
    description text,
    link text,
    trackingURL text,
    prestations int(11),
    status int(3),
    createdAt datetime,
    updateAt datetime,
    foreign key (user_id) references user(id)
  )
  """
)


cmd.execute(""" 
  create table if not exists delivery (
  id char(36) primary key, 
  request_id char(36),
  phone varchar(20),
  email varchar(100),
  addres text,
  obs text,
  foreign key (request_id) references request(id)
  )
""")