class Comment {
  consturctor(text) {
    this.text = text;
    this.votesQty = 0;
  }
  upvote() {
    this.votesQty += 1;
  }
}

const firstComment = new Comment("First comment");

firstComment.upvote();
console.log(firstComment.votesQty); //1
firstComment.upvote();
console.log(firstComment.votesQty); //2

firstComment.hasOwnProperty("text"); //true
firstComment.hasOwnProperty("votesQty"); //true
firstComment.hasOwnProperty("upvote"); //false
firstComment.hasOwnProperty("hasPwnProperty"); //false
