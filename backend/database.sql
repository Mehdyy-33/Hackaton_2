CREATE TABLE `employee` (
    `id` INT AUTO_INCREMENT NOT NULL ,
    `role_id` INT DEFAULT 3 NOT NULL ,
    `firstname` VARCHAR(200)  NULL ,
    `adress` VARCHAR(200)NULL  NOT NULL ,
    `phone` VARCHAR(12)NULL  NOT NULL ,
    `firm` int  NOT NULL ,
    `mail` VARCHAR(200)  NOT NULL ,
    `password` VARCHAR(200)  NOT NULL ,
    `employee_note` VARCHAR(500)  NULL ,
    PRIMARY KEY (
        `id`
    )
);

CREATE TABLE `firm` (
    `id` INT AUTO_INCREMENT NOT NULL ,
    `role_id` INT DEFAULT 2 NOT NULL ,
    `name` VARCHAR(200)  NOT NULL ,
    `adress` VARCHAR(200)  NULL ,
    `phone` VARCHAR(12)  NULL ,
    `logo_url` VARCHAR(200)  NOT NULL ,
    `mail` VARCHAR(200)  NOT NULL ,
    `password` VARCHAR(200)  NOT NULL ,
    `share_mode` int  NOT NULL ,
    `firm_note` VARCHAR(500)  NULL ,
    `share_km` int  NULL ,
    PRIMARY KEY (
        `id`
    )
);

CREATE TABLE `user` (
    `id` INT AUTO_INCREMENT NOT NULL ,
    `role_id` INT DEFAULT 4 NOT NULL ,
    `firstname` VARCHAR(200)  NOT NULL ,
    `lastname` VARCHAR(200)  NULL ,
    `adress` VARCHAR(200)  NULL ,
    `phone` VARCHAR(12)  NULL ,
    `mail` VARCHAR(200)  NOT NULL ,
    `password` VARCHAR(200)  NOT NULL ,
    `traveller_note` VARCHAR(500)  NULL ,
    PRIMARY KEY (
        `id`
    )
);

CREATE TABLE `admin` (
    `id` INT AUTO_INCREMENT NOT NULL ,
    `role_id` INT DEFAULT 1 NOT NULL ,
    `firstname` VARCHAR(200)  NULL ,
    `lastname` VARCHAR(200)  NULL ,
    `adress` VARCHAR(200)  NULL ,
    `phone` VARCHAR(12)  NULL ,
    `mail` VARCHAR(200)  NOT NULL ,
    `password` VARCHAR(200)  NOT NULL ,
    PRIMARY KEY (
        `id`
    )
);


CREATE TABLE `car` (
    `id` INT AUTO_INCREMENT NOT NULL ,
    `firm_id` int  NOT NULL ,

    PRIMARY KEY (
        `id`
    )
);

ALTER TABLE `employee` ADD CONSTRAINT `fk_employee_firm` FOREIGN KEY(`firm`)
REFERENCES `firm` (`id`);

ALTER TABLE `car` ADD CONSTRAINT `fk_car_firm_id` FOREIGN KEY(`firm_id`)
REFERENCES `firm` (`id`);
