class Site {
    constructor() {
        this.boards = [];
        this.arr = [];
    }

    addBoard = function (noticeBoard) {
        if (!this.arr.includes(noticeBoard.name)) {
            this.boards.push(noticeBoard);
            this.arr.push(noticeBoard.name);
            noticeBoard.register = true;
            return;
        } else {
            throw new Error('error');
        }
    };

    findBoardByName = function (name) {
        for (let i = 0; i < this.boards.length; i++) {
            if (this.boards[i].name === name) {
                return this.boards[i];
            }
        }
    };
}

class Board {
    constructor(name) {
        if (name !== null && name !== '') {
            this.name = name;
            this.register = false;
            this.articles = [];
        } else {
            throw new Error('error');
        }
    }

    publish = function (article) {
        if (this.register) {
            this.article = article;
            article.id = `${this.name}-${2}`;
            this.articles.push(article);
            article.register = true;
            let date = new Date();
            article.createdDate = date.toISOString();
        } else {
            throw new Error('Error');
        }
    };
    getAllArticles = function () {
        return this.articles;
    };
}

class Article {
    constructor(jsonPost) {
        if (
            jsonPost.subject !== null &&
            jsonPost.subject !== '' &&
            jsonPost.content !== null &&
            jsonPost.content !== '' &&
            jsonPost.author !== null &&
            jsonPost.author !== ''
        ) {
            this.subject = jsonPost.subject;
            this.content = jsonPost.content;
            this.author = jsonPost.author;
            this.register = false;
            this.comments = [];
        } else {
            throw new Error('Error');
        }
    }

    reply = function (comment) {
        if (this.register) {
            this.comment = comment;
            this.comments.push(comment);
            let date = new Date();
            comment.createdDate = date.toISOString();
        } else {
            throw new Error('Error');
        }
    };
    getAllComments = function () {
        return this.comments;
    };
}

class Comment {
    constructor(jsonComment) {
        if (
            jsonComment.content === '' ||
            jsonComment.content === null ||
            jsonComment.author === '' ||
            jsonComment.author === null
        )
            throw new Error('Invalid Input.');
        this.content = jsonComment.content;
        this.author = jsonComment.author;
    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
