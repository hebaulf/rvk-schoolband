import React, { useState } from 'react'
import PersonalInfo from './PersonalInfo'
import SchoolbandInfo from './schoolBandInfo'
import InstrumentInfo from './InstrumentInfo'
import OtherInfo from './OtherInfo'
import Overview from './Overview'


const Form = () => {

  const [page, setPage] = useState(0);

  const FormTitles = ['Personal Info', 'Schoolband Info', 'Instrument Info', 'Other Info', 'Overview']
  
  const pageDisplay = () => {
    if( page === 0 ) {
      return <PersonalInfo />;
    } else if ( page === 1 ) {
      return <SchoolbandInfo />;
    } else if ( page === 2 ) {
      return <InstrumentInfo />;
    } else if ( page === 3 ) {
      return <OtherInfo />;
    } else {
      return <Overview />;
    }
  }

  return (
    <div className='form'>
      <div className='progressbar'></div>
      <div className='form__container'>
        <div className='form__header'>
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className='form__body'>
          {pageDisplay()}
        </div>
        <div className='form__footer'> 
          <button 
            disabled={ page === 0 }
            onClick={ () => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Til baka
          </button>
          <button 
            disabled={ page === FormTitles.length -1 }
            onClick={ () => {
              setPage((currPage) => currPage + 1);
            }}
          >
            Áfram
          </button>
        </div>
      </div>
    </div>
  )
}

export default Form