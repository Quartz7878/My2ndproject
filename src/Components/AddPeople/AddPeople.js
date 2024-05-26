import React, { useState } from 'react';

const AddPeople = () => {
    const numberOfNightsBetweenDates = (startDate, endDate) => {
        const start = new Date(startDate) //clone
        const end = new Date(endDate) //clone
        let dayCount = 0
      
        while (end > start) {
          dayCount++
          start.setDate(start.getDate() + 1)
        }
      
        return dayCount
      }
    return (
        <div>
            <div class="mb-3">
                <p>Guest {quantity}</p>
                <label for="exampleFormControlInput1" class="form-label">Guests</label>
                <br />
                <div className='d-flex'>
                    <input type="button" value="-" onClick={handleRemove} />
                    <input type="button" value={quantity} onChange={handleBlur} name='guest' type='number' />
                    <input type="button" value="+" onClick={handleAdd} />
                </div>
                <input type="button" value="Submit" onClick={handleSubmit} />
            </div>
            
        </div>
    );
};

export default AddPeople;