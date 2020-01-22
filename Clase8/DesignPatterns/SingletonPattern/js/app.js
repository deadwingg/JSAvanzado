console.log('singleton!');
//funcion autoinvocada
(function () {
        let instance = null;
    function App() {
        if(instance){
            return instance;
        } else {
            this.id = Math.random();
            instance = this;
            return instance;
        }

    }
    window.app = App;
})();