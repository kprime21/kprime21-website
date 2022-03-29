import styled from 'styled-components';


const ContactCard = styled.form`
position:relative;
border: 5px white solid;
border-radius: 5px;
color:white;
margin:auto;
margin-top:15rem;

max-width:600px;
padding: 15px;
line-height:2rem;
text-align:center;

label{
    line-height: 2.7em;
}
textarea{
    min-height: 100px;
    font-size: 14px;
}
.input-field{
    width:100%;
    padding-top:10px;
    padding-bottom:10px;
    background-color: white;
    border-radius: 5px;
    border:1px solid var(--borderColor);
    font-size: 14px;
}
#submit-button{
    margin-top: 10px;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #fff;
    background-color: blue;
    border:none;
}
`


const Contact = () => {
    return(
        
        <ContactCard  id="contact-form" action="https://formsubmit.co/b7613c49f488d606ef83429e229df12a" method="POST" >
        
            
                <label>Name</label>
                <input type="text" className = 'input-field' name="name"/>
                <label>Subject</label>
                <input type="text"  className = 'input-field' name="subject"/>
                <label>Email</label>
                <input type="email" className = 'input-field' name="email"/>
                <label>Message</label>
                <textarea  className = 'input-field' name="message"></textarea>
                <input id="submit-button" type="submit" value="Send"/>
            
        </ContactCard>
        
    );

};


export default Contact;