function Queue() {
    var items = []

    this.enqueue = function (element) {
        // adiciona um novo item à fila
        items.push(element)
    }
    this.dequeue = function () {
        //  remove um item da fila
        return items.shift()
    }
    this.front = function () {
        // retorna o primeiro elemento da fila
        return items[0]
    }
    this.isEmpty = function () {
        // retorna um booleano se a fila está vazia ou não
        return items.length === 0
    }
    this.size = function () {
        // retorna o tamanho da fila
        return items.length
    }
    this.print = function () {
        // imprime a fila no console
        console.log(items.toString())
    }
}

// var fila = new Queue()

// fila.enqueue('Carlos')
// fila.enqueue('Margareth')
// fila.enqueue('Judy')
// fila.enqueue('May')
// fila.enqueue('Connan')

// fila.print()



/* Fila de prioridade */
function PriorityQueue() {
    var items = []

    function QueueElement(element, priority) {
        this.element = element
        this.priority = priority
    }

    this.enqueue = function(element, priority) {
        var queueElement = new QueueElement(element, priority)
        var added = false

        for (let i = 0; i < items.length; i++) {
            if(queueElement.priority < items[i].priority){
                items.splice(i, 0, queueElement)
                added = true
                break
            }  
        }
        if (!added) {
            // ! significa negação
            items.push(queueElement)
        }
    }

    this.dequeue = function() {
        return items.shift()
    }

    this.print = function() {
        for (let i = 0; i < items.length; i++) {
            console.log(items[i].element + ' ' + items[i].priority)
            
        }
    }
}

var pqueue = new PriorityQueue()

pqueue.enqueue('Margareth', 4)
pqueue.enqueue('Luna', 2)
pqueue.enqueue('Joy', 5)
pqueue.enqueue('Lura', 1)
pqueue.enqueue('Korg', 3)

//pqueue.print()

// Jogo da batat quente

function HotPotato(nameList, num) {
    var queue = new Queue()

    for (let i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i])        
    }

    var eliminated = ' '

    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue())
        }
        eliminated = queue.dequeue()
        console.log(eliminated + ' was eliminated from the Hot Potato Game')
    }

    return queue.dequeue()
}

var names = ['João', 'José', 'Maria', 'Ana', 'Lucas']
var winner = HotPotato(names, 7)
console.log('The winner is: ' + winner)

