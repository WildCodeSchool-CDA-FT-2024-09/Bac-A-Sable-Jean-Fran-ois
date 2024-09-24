CREATE TABLE `status` (
  id INT NOT NULL AUTO_INCREMENT,
  `status` VARCHAR(7) NOT NULL,
  PRIMARY KEY (`id`),
);

CREATE TABLE `repo` (
  id INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `url` text NOT NULL,
  `status_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `repo_status_id` FOREIGN KEY (`status_id`) REFERENCES `status`(`id`)
);

CREATE TABLE `comments` (
  id INT NOT NULL AUTO_INCREMENT,
  `comment` TEXT NOT NULL,
  `status_id` INT NOT NULL,
  `repo_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `comments_status_id` FOREIGN KEY (`status_id`) REFERENCES `status`(`id`)
  CONSTRAINT `comments_repo_id` FOREIGN KEY (`repo_id`) REFERENCES `repo`(`id`)
);

CREATE TABLE `languages` (
  id INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
);

CREATE TABLE `repo_languages` (
  id INT NOT NULL AUTO_INCREMENT,
  `repo_id` INT NOT NULL,
  `languages_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `repo_languages_id` FOREIGN KEY (`repo_id`) REFERENCES `repo`(`id`)
  CONSTRAINT `languages_repo_id` FOREIGN KEY (`languages_id`) REFERENCES `languages`(`id`)
);