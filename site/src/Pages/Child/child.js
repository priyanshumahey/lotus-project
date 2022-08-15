import './child.css';
import React, { useState } from 'react';

function Child () {
    const [screen1, setScreen1] = useState(true);
    const [screen2, setScreen2] = useState(false);
    const [screen3, setScreen3] = useState(false);

    const screenChange1 = () => {
        setScreen1(!screen1)
        setScreen2(!screen2)
    }

    const screenChange2 = () => {
        setScreen2(!screen2)
        setScreen3(!screen3)
    }
    
    
    return(
        <div className='main'>
        {screen1 && 
            <>
            <h1>Welcome!</h1>
            <p className='pmain'>
                This is our prototype!
                For now, this prototype will only give you a basic introduction.
                Click on continue to view the basic idea of what the modules will include!
                Then, you will be able to view a sample module.
            </p>
            <button className='Cont' onClick={screenChange1}>Continue</button>
            </>
        }
        {
           screen2  && 
           <div className='page3'>
           <h1>Purple Lotus</h1>
           <h2>User: Asian Canadian Youth</h2>

           <br></br>
           <h3>Module 1: Introduction</h3>
           <p className='pmain2'><strong>Example Topics:</strong> Terminology, Background</p>
           <p className='pmain2'>This module is highly informational and goes over misconceptions, stigma and introduces people onto how to use Purple Lotus.
           It also introduces mental well-being and provides more information on what general mental health is.</p>
           
           
           <br></br>
           <h3>Module 2: Mental Illnesses and Disorders</h3>
           <p className='pmain2'><strong>Example Topics:</strong> Depression, Anxiety, ADHD, OCD, schizophrenia</p>
           <p className='pmain2'>This goes over commmon mental illnesses and disorders.
           Will also provide toolkits to self-test for mental health conditions.</p>
           
           <br></br>
           <h3>Module 3: Personal Identity and Cultural Identity</h3>
           <p className='pmain2'><strong>Example Topics:</strong> Feelings of "Other-ness", Gender and Traditional Expectations, LGBTQ+</p>
           <p className='pmain2'>This module goes over identity and the intricacies of identity. 
           It also goes into what it means to be part of the community and associating with your culture.
           This part has a special section for gender and sex as well.</p>

           <br></br>
           <h3>Module 4: Racism and Dis crimination</h3>
           <p className='pmain2'><strong>Example Topics:</strong> Internalized Racism, Unlearning Limiting Beliefs, Dealing with Racism</p>
           <p className='pmain2'>
           </p>

           <br></br>
           <h3>Module 5: Communicating Mental Health With Parents and Family Members</h3>
           <p className='pmain2'><strong>Example Topics:</strong> Stigma, Honour, Expectations, Rewiring Terminology Surrounding Mental Health, Setting Boundaries, Intergenerational Trauma</p>
           <p className='pmain2'>
           includes a toolkit available in different languages
           </p>

           <br></br>
           <h3>Module 6: Getting Help and Making the Most of Mental Health Resources</h3>
           <p className='pmain2'><strong>Example Topics:</strong> Types of Therapy, Counselling Styles, What Therapy Might Look Like, Holistic Therapy, Resources for Asian Canadians</p>
           <p className='pmain2'>
           </p>

           <br></br>
           <h3>Module 7: How To Support Someone With Mental Health Issues</h3>
           <p className='pmain2'><strong>Example Topics:</strong> Initiating the Conversation, Setting Boundaries</p>
           <p className='pmain2'>
           </p>

            <br></br>
           <button className='Cont' onClick={screenChange2}>Continue</button>
           </div>
        }
        {
           screen3  && 
           <>
           <h1>prototype</h1>
           </>
        }
        </div>
    )
}

export default Child;