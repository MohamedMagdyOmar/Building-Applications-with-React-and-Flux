import {Dispatcher} from 'flux';

// - now we have single dispatcher that the rest of the app can use. it is a singleton, there is only one
//   dispatcher per app.

// - the dispatcher is app central hub, it will hold a list of callbacks, and all our app action will be dispatched
//   via this dispatcher.

// - Stores will register with this dispatcher to say that they would like to be informed when actions occures.
const dispatcher = new Dispatcher()

export default dispatcher;