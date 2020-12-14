
var app = new Vue(
 {
   el: '.container',
   data: {
       contacts: [
    	{
    		name: 'Michele',
    		avatar: 'https://cdn5.vectorstock.com/i/1000x1000/17/14/male-hacker-avatar-icon-image-vector-17311714.jpg',
    		visible: true,
    		messages: [
    			{
    				date: '10/01/2020 15:30:55',
    				text: 'Hai portato a spasso il cane?',
    				status: 'sent'
    			},
    			{
    				date: '10/01/2020 15:50:00',
    				text: 'Ricordati di dargli da mangiare',
    				status: 'sent'
    			},
    			{
    				date: '10/01/2020 16:15:22',
    				text: 'Tutto fatto!',
    				status: 'received'
    			}
    		],
    	},
    	{
    		name: 'Babbo Natale',
    		avatar: 'img/babbo.png',
    		visible: true,
    		messages: [
    			{
    				date: '20/03/2020 16:30:00',
    				text: 'Ciao come stai?',
    				status: 'sent'
    			},
    			{
    				date: '20/03/2020 16:30:55',
    				text: 'Bene grazie! Stasera ci vediamo?',
    				status: 'received'
    			},
    			{
    				date: '20/03/2020 16:35:00',
    				text: 'Mi piacerebbe ma devo andare a fare la spesa.',
    				status: 'sent'
    			}
    		],
    	},
    	{
    		name: 'Re Artù',
    		avatar: 'img/re.png',
    		visible: true,
    		messages: [
    			{
    				date: '28/03/2020 10:10:40',
    				text: 'La Marianna va in campagna',
    				status: 'received'
    			},
    			{
    				date: '28/03/2020 10:20:10',
    				text: 'Sicuro di non aver sbagliato chat?',
    				status: 'sent'
    			},
    			{
    				date: '28/03/2020 16:15:22',
    				text: 'Ah scusa!',
    				status: 'received'
    			}
    		],
    	},
    	{
    		name: 'Samuele',
    		avatar: 'img/nerd.png',
    		visible: true,
    		messages: [
    			{
    				date: '10/01/2020 15:30:55',
    				text: 'Lo sai che ha aperto una nuova pizzeria?',
    				status: 'sent'
    			},
    			{
    				date: '10/01/2020 15:50:00',
    				text: 'Si, ma preferirei andare al cinema',
    				status: 'received'
    			}
    		],
    	},
    ],
    indexChat:0,
    message:"",
    searchcon:"",
    send:false
  },
  created: function () {
      setTimeout(
       () => {
         this.sendMessage();
     }, 5000
    );

  },
  methods: {
    showchat: function (index) {
      this.indexChat=index;
      console.log(this);
    },
    addmessage: function () {
      var indexpass=this.indexChat;
      var nav=this.contacts[indexpass].messages;
      if (this.message != "") {
        var newobject = {
          date: dayjs().format('DD/MM/YYYY HH:mm:ss') ,
          text: this.message,
          status: 'sent'
        }
          nav.push(newobject);
        }
        this.message="";
        this.send=true;
    },
    searchcontact: function () {
      var filterarray =  this.contacts.filter((element) => {
        console.log(element);
        return element.name.startsWith(this.searchcon);
      });
    },

    sendMessage: function() {
      var indexpass=this.indexChat;
      var nav=this.contacts[indexpass].messages;
      console.log(this.send);
      if (this.send == true) {
        var newobject = {
          date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
          text: "Ok",
          status: 'received'
        }
          nav.push(newobject);
          console.log(nav);
        }
    }
  }
 }
);
