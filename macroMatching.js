{

    //TODO: NOTATION SUGGESTION (!) When order is imperative, end the string with an exclamation point
    //EXAMPLE: 'follow the yellow brick road!'
    //parses the string exactly against the query, and only an exact match will trigger a response. g
    //TODO: NOTATION SUGGESTION (?) Tag trigger words of long phrases to prompt the AI to ask the user 
    //Exaample: '?follow the ?yellow ?brick road'
    //Parses as an array of strings, if each string is not contained in the query, the algorithm will test to see if the operative words exist, if so, the computer will assume you meant to say the pre-programmed query
    class Talkshow {
        constructor() {
            this.roboQandA = [ //Testing Datastructure & notation
                {
                    response: `I'm Fine; I'm Robert and I'm fine.`,
                    phrases: [
                        'are ?you ?okay',
                        'how are you!',
                        'are ?you ?feeling well',
                    ]
                },
                {
                    response: `No thank you.`,
                    phrases: [
                        'can ?I ?help ?you',
                        'do ?you ?want to ?go to ?tahiti',
                        'would ?you ?like to have ?your ?eyes ?eaten by ?ravens!',
                    ]
                },
                {
                    response: `Don't Tell me what to do`,
                    phrases: ['have a great day']
                },
                {
                    response: 'That really got out of hand fast',
                    phrases: ['well ?that ?escalated ?quickly!']

                },
                {
                    response: 'Cowabunga Dude',
                    phrases: ['what is ?your ?catch ?phrase']
                },
            ]
        }

        getPhraseType(phrase) {
            let type = undefined
            if (phrase.includes('?') && phrase.endsWith('!')) {
                type = 'operative-strict'
            } else if (phrase.includes('?')) { type = 'operative'
            } else if (phrase.endsWith('!')) { type = 'strict' 
            } else { type = 'unordered'
            }
            return type
        }

        parseOperative(operativePhrase) {
            let probable = operativePhrase.split(' ').map(a=>a.replace('?', ''))
            let possible = operativePhrase.split(' ').filter(a=>a.startsWith('?'))
            return {prob:probable, poss:possible}
        }

        //TODO: Parse Operative Strict
        
        //TODO: Parse strict (aka remove the exclamation point)
        
        //TODO: Parse undordered
        
        //TODO: Matching against test phrases
        
        //TODO: Kick your butt. 
        
        //TODO: you smell

        //TODO: thats okay, take your time

        
    }




    testing = new Talkshow()

    for (let set of testing.roboQandA){
        for (let q of set.phrases){
            console.log(q, testing.getPhraseType(q))
            if (testing.getPhraseType(q) == 'operative'){console.log(testing.parseOperative(q))}

        }
    }














}
