CREATE DATABASE DbPractice;

CREATE TABLE activities (
    id int,
    title varchar(255),
    current_status varchar(255),
    created_at timestamp,
    updated_at timestamp 
);

insert into Activities (id,title, current_status, created_at,updated_at) 
	values (0,'test activity','not complete',current_timestamp, current_timestamp);