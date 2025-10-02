import React from "react";
import "../App.css";
import Swal from "sweetalert2";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ad7eaea2-52a8-4468-978b-cfed3673ade1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
    title: "Perfeito",
    text: "Sua mensagem foi enviada com sucesso!",
    icon: "success"
                });
    
      event.target.reset();    }
  };
  return (
    <>
      <section className="contact">
        <form onSubmit={onSubmit}>
          <div className="title-bar">
            <div className="title-text">CONTATE-NOS</div>
            <div className="title-bar-grey"></div>
          </div>
          <div className="form-body">
            <div className="inputbox">
              <label> Nome: </label>
              <input
                type="text"
                className="field"
                placeholder="Digite seu nome"
                name="name"
                required
              />
            </div>
            <div className="inputbox">
              <label> Email: </label>
              <input
                type="email"
                className="field"
                placeholder="Digite seu email"
                name="email"
                required
              />
            </div>
            <div className="inputbox">
              <label> Mensagem: </label>
              <textarea
                className="field mess"
                placeholder="Digite sua mensagem"
                name="message"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn">
              Enviar
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Contact;
