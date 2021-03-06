'use strict';

const {

    configureInitialState,
    setMainComponent,
    getStateKeyMapper,
    getState,
    setState,
    setInitialState,

} = require( './lib/index.js' );


module.exports = Object.freeze(

    ({
        initialState,

    }) => {

        initialState = configureInitialState({

            initialState,
        });

        const reduxXCore = {};

        const stateKeyMapper = getStateKeyMapper({

            initialState
        });

        return Object.freeze({

            setMainComponent: setMainComponent.bind({

                reduxXCore,
            }),

            setInitialState: setInitialState.bind({

                reduxXCore,
                stateKeyMapper,
                initialState
            }),

            getState: getState.bind({

                reduxXCore,
                stateKeyMapper
            }),

            setState: setState.bind({

                reduxXCore,
                stateKeyMapper
            }),
        });
    }
);
