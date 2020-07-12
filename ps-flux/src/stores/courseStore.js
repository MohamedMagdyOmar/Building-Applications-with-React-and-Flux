
// stores: Change Listeners
// we can have 1 store per app, or multiiple stores.
// our store needs to emit an event each time a change occures
// so we extend base class to give it this behavior.

import {EventEmitter} from 'events';
import Dispatcher from "../appDispatcher";

const CHANGE_EVENT = "change";
// by extending EventEmitter our class can access all EventEmitter capabilities.
class CourseStore extends EventEmitter{
    // here we will use event emitter to emit events.
    // every store needs to provide a way for our react component to interact with store, so we are going to call
    // the following 3 methods that are provided by EventEmitter here inside our flux store.

    // each flux store should have 3 functions that call these event emitter functions:
        // 1-addChangeListener -> to allow react component to subscribe to our store
        // 2-removeChangeListener -> to allow react component to unsubscribe to our store
        // 3-emitChange

    addChangeListner(callback){
        // when a change occures in our store, we will call the callback provided.
        // this method will allow react components to subscribe to our store so they are notified when change occures.
        // this function is useful to react component so it can say: Hey, i would like to know when this store changes, then 
        // the callback function get called if there is change in our store
        this.on(CHANGE_EVENT, callback)
    }

    // this will allows our react components to unsubscribe from the store
    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange(){
        this.emitChange(CHANGE_EVENT);
    }
}

Dispatcher.register(action => {
    // this function will be called anytime an action is dispatched.
    // every store is notifed of every action.
    switch(action.actionType){
        
    }
})

const store = new CourseStore();
export default store;

// next we need to register our store with the dispatcher, so the store will emit when actions occure.
// so we have missing piece: we need to register the store with the dipatcher, so the store notified when action occur.