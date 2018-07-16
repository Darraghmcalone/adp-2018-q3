CREATE DATABASE boomtown;

CREATE USER boomtown WITH PASSWORD 'boomtown';

-- then exited, and re-ran psql:
-- psql -U boomtown -d boomtown

CREATE TABLE "public"."tags" (
   "id" serial PRIMARY KEY,
   "title" text NOT NULL
);

CREATE TABLE "public"."users" (
   "id" serial PRIMARY KEY,
   "email" text NOT NULL,
   "fullname" text NOT NULL,
   "bio" text
);

CREATE TABLE "public"."items" (
  "id" serial primary key,
  "title" text not null,
  "imageurl" text DEFAULT null,
  "description" text not null,
  "created" timestamp with time zone DEFAULT NOW(),
  "ownerid" integer REFERENCES users(id)
    ON DELETE CASCADE,
  "borrowerid" integer REFERENCES users(id)
    ON DELETE SET NULL
);

CREATE TABLE "public"."itemtags" (
  "itemid" integer references items (id)
    ON DELETE CASCADE,
  "tagid" integer references tags (id)
    ON DELETE NO ACTION,
  unique (itemid, tagid)
);

INSERT INTO tags (title)
VALUES ('Household Items'),
('Tools'),
('Electronics'),
('Physical Media'),
('Sporting Goods'),
('Musical Instruments'),
('Recreational Equipment');

INSERT INTO itemtags (itemid, tagid)
VALUES (1,1),(1,2),(2,1),(3,1),(3,4),(3,7),(4,1),(4,2),(4,7);



INSERT INTO items (title, imageurl, description)
VALUES (
        'Aeroplane toy',
        'https://www.google.co.uk/search?q=google&source=lnms&tbm=isch&sa=X&ved=0ahUKEwj24arg5JTcAhWNy6QKHe2vCm4Q_AUIDSgE&biw=1366&bih=635#imgrc=_xiFa-Slsm8tuM:',
        'Nice view over the clouds'
    ),
    (
        'Irish Cup Of Tea',
        'https://www.google.co.uk/search?rlz=1C1CHBF_en-GBGB791GB791&biw=1366&bih=635&tbm=isch&sa=1&ei=UcxEW9LoHKnBgAat6JyYBQ&q=tea&oq=tea&gs_l=img.3..0i67k1l10.2057.7171.0.7941.5.5.0.0.0.0.167.451.1j3.4.0....0...1c.1.64.img..1.4.447.0..0.0.6v6yOF3zH9k#imgrc=BXWi1-KqqCjsIM:',
        'Good cuppa'
    ),
    (
        'Gaelic Football',
        'https://www.google.co.uk/search?rlz=1C1CHBF_en-GBGB791GB791&biw=1366&bih=635&tbm=isch&sa=1&ei=UcxEW9LoHKnBgAat6JyYBQ&q=gaa&oq=gaa&gs_l=img.3..0j0i67k1j0l8.2104.2882.0.3885.4.4.0.0.0.0.94.238.3.3.0....0...1c.1.64.img..1.3.235.0..35i39k1.0.OvD9z0pNHyo#imgrc=3EsbrtVCDf0eWM:',
        'A real sport'
    ),
      (
        'Hammer',
        'https://www.google.co.uk/search?rlz=1C1CHBF_en-GBGB791GB791&biw=1366&bih=635&tbm=isch&sa=1&ei=UcxEW9LoHKnBgAat6JyYBQ&q=world+cup+2018&oq=wor&gs_l=img.1.1.0l2j0i67k1l3j0j0i67k1l4.3986.8641.0.10603.4.4.0.0.0.0.91.222.3.3.0....0...1c.1.64.img..1.3.221.0...0.7xKVTwLacUs#imgrc=Y-WjfNBYhL2VfM:',
        'Hit them nails down!'
    )
;

