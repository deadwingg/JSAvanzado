console.log('Pub-Sub!');
//funcion autoinvocada

const Bus = {
    topics: {},
    subscribe: function (topic, listener) {
        if(!this.topics[topic]) {
            this.topics[topic] = [];
        }
        this.topics[topic].push(listener);
    },
    publish: function (topic, callback) {
        if(!this.topics[topic] || this.topics[topic].length < 1){
            console.log('No subscribers');
            return;
        } else {
            this.topics[topic].forEach((listener) => {
                listener(message || {})
            })
        }

    }
};

function Order(data) {
    this.data = data;

}
Order.prototype = {
    saveOrder: function () {
        Bus.publish('order/new', this.data);
    }
};

function Mailer() {
    Bus.subscribe('order/new', this.enviarMail);
}

Mailer.prototype = {
    enviarMail: function (data) {
        console.log('Enviando mail a ' + data.email);
    }
};
function SMS() {
    Bus.subscribe('order/new', this.enviarSms);
}

SMS.prototype = {
    enviarSms: function (data) {
        console.log('Enviando sms a ' + data.phoneNumber);
    }
};