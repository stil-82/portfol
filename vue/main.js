new Vue({
    el: '#app',
    data: {
        example: {
            title: 'Привет мир',
            coordX: 0
        }
    },
   methods: {
       handleOuter(e) {
           console.log('Outer');
       },
       handleInner(e) {
        console.log('Inner');
        }
    }
})