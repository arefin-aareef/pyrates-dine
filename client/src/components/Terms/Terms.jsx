/* eslint-disable no-unused-vars */
import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h2 className='text-center my-4'>Terms & Conditions</h2>
                <p>
                Welcome to Pyrates Dine. By using this page, you agree to the following terms and conditions:
                <br /> <br /> 
                1. The recipes and information provided on this page are for general informational purposes only. We do not provide any guarantees or warranties regarding the accuracy, completeness, or suitability of the information or recipes provided.
                <br /> <br /> 
                2. We are not responsible for any injury, loss, or damage that may occur as a result of following any of the recipes or advice provided on this page. Always use caution and common sense when cooking or baking.
                <br /> <br /> 
                3. The recipes and content on this page are for personal, non-commercial use only. You may not reproduce, distribute, or sell any of the content without our prior written permission.
                <br /> <br /> 
                4. We reserve the right to remove any recipe or content from this page at any time and without notice.
                <br /> <br /> 
                5. By submitting a recipe or any content to this page, you grant us a non-exclusive, royalty-free, perpetual, and irrevocable license to use, reproduce, modify, adapt, publish, translate, and distribute the content in any form or media, whether now known or hereafter developed.
                <br /> <br /> 
                6. You are solely responsible for ensuring that any content you submit to this page does not violate any applicable laws or infringe on any third-party rights, including but not limited to copyrights, trademarks, or privacy rights.
                <br /> <br /> 
                7. We may use cookies or other tracking technologies to collect information about your use of this page. By using this page, you consent to our use of cookies and tracking technologies.
                <br /> <br /> 
                8. We reserve the right to modify these terms and conditions at any time and without notice. Your continued use of this page after any changes to the terms and conditions will constitute your acceptance of the modified terms.
                <br /> <br /> 
                Thank you for using Pyrates Dine. We hope you enjoy the recipes and find them useful in your cooking and baking endeavors.
            </p>
            <p>Go back to <Link to="/register">Register</Link> </p>
        </Container>
    );
};

export default Terms;