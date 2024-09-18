import brevo from "@getbrevo/brevo";
import {
    TransactionalEmailsApi,
    TransactionalEmailsApiApiKeys,
    SendSmtpEmail,
  } from "@getbrevo/brevo";
  
//const apiKey = process.env.BREVO_API_KEY;
// EL SERVICIO NO TIENE BIEN LA VARIABLES DE ENTORNO, PERO SI SIRVE SI SE LE COLOCA EL API KEY DIRECTO

const appName = "FundMePls" 
const apiInstance = new TransactionalEmailsApi();
apiInstance.setApiKey(TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY);
  
export const sendRegisterEmail = async (user) => {

    try { 
        const sendSmtpEmail = new SendSmtpEmail();

        sendSmtpEmail.subject = "¡Bienvenid@ a nuestra plataforma de crowdfunding FundMePls!";
        sendSmtpEmail.to = [
        { email: user.email, name: user.nombre },
        ];
        sendSmtpEmail.htmlContent = `
        <html>
            <body>
                <h1>Bienvenido, ${user.nombre}</h1>
                <p>Tú solicitud de registro se ha procesado exitosamente. Gracias por preferir nuestros servicios. <br> Descubre todo sobre nuestra plataforma para que puedas alcanzar tus metas o ayudar a otros a lograrlo.</p>
                <a href='https://www.tu-plataforma.com'>Visita nuestra web</a>
            </body>
        </html>`;
        sendSmtpEmail.sender = {
        name: "FundMePls",
        email: "stevn11progamer@gmail.com",
        };

        const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
        console.log("Email enviado: ", result);

    } catch (error) {
        console.error(error);
    }
}

export const sendGratitudeEmail = async (user) => {

    try { 
        const sendSmtpEmail = new SendSmtpEmail();

        sendSmtpEmail.subject = "¡Donación realizada con éxito!";
        sendSmtpEmail.to = [
        { email: user.donorEmail, name: user.donorFirstName },
        ];
        sendSmtpEmail.htmlContent = `
        <html>
            <body>
                <h1>Muchas gracias ${user.donorFirstName}</h1>
                <p>Tú donación se ha procesado exitosamente. Gracias por preferir nuestros servicios. <br><br> Visita nuestra web ante cualquier duda.</p>
                <a href='https://www.tu-plataforma.com'>Visita nuestra web</a>
            </body>
        </html>`;
        sendSmtpEmail.sender = {
        name: "FundMePls",
        email: "stevn11progamer@gmail.com",
        };

        const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
        console.log("Email enviado: ", result);

    } catch (error) {
        console.error(error);
    }
}

export const sendDonationEmail = async (info) => {

    try { 
        const sendSmtpEmail = new SendSmtpEmail();

        sendSmtpEmail.subject = "¡Donación realizada a uno de tus proyectos!";
        sendSmtpEmail.to = [
        { email: info.ownerEmail, name: info.ownerFirstName},
        ];
        sendSmtpEmail.htmlContent = `
        <html>
            <body>
                <h1>Felicidades ${info.ownerFirstName}</h1>
                <p>
                    Tú proyecto ${info.ownerProjectName} ha recibido una donación de ${info.amount} GoofyCoins.<br><br>
                    <h2>Información sobre el donador. <br> </h2>
                    <b>Nombre: </b> ${info.donorFirstName} ${info.donorLastName}.<br>
                    <b>Correo electrónico: </b> ${info.donorEmail}.<br>
                    <b>Teléfono: </b> ${info.donorPhoneNumber}.<br><br> 
                    Visita nuestra web ante cualquier duda.
                </p>
                <a href='https://www.tu-plataforma.com'>Visita nuestra web</a>
            </body>
        </html>`;
        sendSmtpEmail.sender = {
        name: "FundMePls",
        email: "stevn11progamer@gmail.com",
        };

        const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
        console.log("Email enviado: ", result);

    } catch (error) {
        console.error(error);
    }
}

export const sendRegisterProyect = async (infoProyect) => {

    try { 
        const sendSmtpEmail = new SendSmtpEmail();

        sendSmtpEmail.subject = "¡El proyecto ha sido registrado exitosamente!";
        sendSmtpEmail.to = [
        { email: infoProyect.email, name: infoProyect.firstName},
        ];
        sendSmtpEmail.htmlContent = `
        <html>
            <body>
                <h1>¡Proyecto creado con éxito, ${infoProyect.firstName}!</h1>
                <p>Tú proyecto <strong>${infoProyect.ProjectName}</strong> ha sido registrado y creado correctamente en nuestra plataforma. Gracias por confiar en nosotros para hacer realidad tus ideas.</p>
                <a href='https://www.tu-plataforma.com'>Visita nuestra web</a>
            </body>
        </html>`;
        sendSmtpEmail.sender = {
        name: "FundMePls",
        email: "stevn11progamer@gmail.com",
        };

        const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
        console.log("Email enviado: ", result);

    } catch (error) {
        console.error(error);
    }
};


export const sendUpdateProyect = async (infoProyect) => {

    try { 
        const sendSmtpEmail = new SendSmtpEmail();

        sendSmtpEmail.subject = "¡El proyecto ha sido modificado exitosamente!";
        sendSmtpEmail.to = [
        { email: infoProyect.email, name: infoProyect.firstName},
        ];
        sendSmtpEmail.htmlContent = `
        <html>
            <h1>¡El Proyecto ha sido Modificado con Éxito!</h1>
            <p>Hola <strong>${infoProyect.firstName}</strong>,</p>
            <p>Queremos informarte que los detalles de tú proyecto <strong>${infoProyect.ProjectName}</strong> han sido actualizados con éxito en nuestra plataforma.</p>
            <p>Gracias por confiar en nosotros para hacer realidad tus ideas.</p>
            <p>Saludos,<br>
            El equipo de FundMePls</p>
            <a href='https://www.tu-plataforma.com'>Visita nuestra web</a>
        </html>`;
        sendSmtpEmail.sender = {
        name: "FundMePls",
        email: "stevn11progamer@gmail.com",
        };

        const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
        console.log("Email enviado: ", result);

    } catch (error) {
        console.error(error);
    }
};


// Exportar la función
export default {
    sendRegisterEmail,
    sendGratitudeEmail,
    sendDonationEmail,
    sendRegisterProyect,
    sendUpdateProyect
  };