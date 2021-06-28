import React from 'react';

function Greetings(props) {
  function greet(lang) {
    let hello = {
      en: `Hello`,
      es: 'Hola',
      fr: 'Bonjour',
      de: 'Hallo',
    };
    return (
      <div className="greeting">
        {hello[lang]} {props.name}
      </div>
    );
  }

  return <div>{greet(props.lang)}</div>;
}

export default Greetings;
