import React from 'react';

const Contact = () => {
  return (
    <>
      <div className="container">
        <form>
          <h1>Contact Form</h1>
          <h2>Name</h2>
          <input type="text" id="name" />
          <h2>Email</h2>
          <input type="email" id="email" />
          <label htmlFor="country" className="country1">Country</label>
          <select id="country" name="country">
            <option value="none">Select an Option</option>
            <option value="AF">Afghanistan</option>
            <option value="AX">Aland Islands</option>
            <option value="AL">Albania</option>
            <option value="DZ">Algeria</option>
            <option value="AS">American Samoa</option>
            <option value="AD">Andorra</option>
            <option value="AO">Angola</option>
            <option value="AI">Anguilla</option>
            <option value="AQ">Antarctica</option>
            <option value="AG">Antigua and Barbuda</option>
            <option value="AR">Argentina</option>
            <option value="AM">Armenia</option>
            <option value="AW">Aruba</option>
            <option value="AU">Australia</option>
            <option value="AT">Austria</option>
            <option value="AZ">Azerbaijan</option>
          </select>
          <h2>Message</h2>
          <input type="text" id="message" /><br />
          <button type="submit" id="save_btn">Send</button>
          <button type="reset" id="reset_btn">Reset</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
