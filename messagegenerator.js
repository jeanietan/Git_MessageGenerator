//This program will output a random inspirational message whenever a user selects a message category
//Message category -  Love, Joy, Hope

const messageGenerator = {

messageCategory : ['love', 'joy',' hope'],
loveType :  ['in love', 'friendship love', 'family love', 'God\'s love'],
joyType :   ['dream job', 'financial breakthrough', 'found love'],
hopeType:   ['illness hope', 'financial hope', 'family love hope'],
loveQuotes: ['True love stories never have endings', 'Friendship is another word for love.', 'We may have our differences, but nothing’s more important than family.', 'God loves you.'],
joyQuotes:  ['Strive not to be a success, but rather to be of value.', 'Money can’t buy love because it’s overpriced', 'I am who I am because of you. You are every reason, every hope, and every dream I’ve ever had'],
hopeQuotes: ['As for me, I will always have hope; I will praise you more and more.', 'Wealth consists not in having great possessions, but in having few wants','Death ends a life, not a relationship'],

generateRandomIndex(message){
    let randomIndex;

    switch(message){
      case 'LOVE': randomIndex = Math.floor(Math.random()*this.loveType.length);
                    break;
      case 'JOY': randomIndex = Math.floor(Math.random()*this.joyType.length);
                    break;
      case 'HOPE': randomIndex = Math.floor(Math.random()*this.hopeType.length);
                    break;
      default: console.log('Invalid message category!');
               break;
    }

    return randomIndex;
  },

generateMessage(messageCat){
     let selectedMessage = messageCat.toUpperCase();
     let selectedIndex = this.generateRandomIndex(selectedMessage);
     let collectiveMessage = [];


     switch(selectedMessage){
      case 'LOVE': collectiveMessage.push('Love', this.loveType[selectedIndex], this.loveQuotes[selectedIndex]);
                   break;

      case 'JOY': collectiveMessage.push('Joy', this.joyType[selectedIndex], this.joyQuotes[selectedIndex]);
                  break;

      case 'HOPE': collectiveMessage.push('Hope', this.hopeType[selectedIndex], this.hopeQuotes[selectedIndex]);
                   break;

      default: console.log('Invalid message category!');
               break;
      }

      return collectiveMessage;
    }
};

console.log('Select one of the message category: ', messageGenerator.messageCategory);
console.log(messageGenerator.generateMessage('Hope'));
