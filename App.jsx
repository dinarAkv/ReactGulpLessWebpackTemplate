import React from 'react';

import _ from 'underscore';

class App extends React.Component {




  myFunc(){
    alert('Hello');
    let val = [{
      name: 'Vasya',
      lastName: 'Ivanov'
    },
    {
      name: 'Petya',
      lastName: 'Petrov'
    },
  ];
    // console.log(_.last(val));


    let val2 = {};
    val2 = _.map(val, (obj,key) => {
        return obj.name + 'yes';
    })
    console.log(val2);

  }

   render() {
      return (

			<div>
            Hello World!!!

            <button className='my_button' onClick={this.myFunc} >Button</button>
			</div>

      );
   }
}

export default App;
