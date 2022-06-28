<template>
  <footer>
    <div id="footer-left">
      <h3>Sobre nós</h3>
      <p>
        A Azulão Petshop é uma empresa de varejo de produtos e serviços que atua
        no ramo de pets. Criada no primeiro trimestre de 2022, a Azulão já está
        presente no rol das lojas de e-commerce mais acessadas do país! Aqui já
        não sei mais o que escrever para preencher esse espaço vertical. Morbi
        eget dui in dui dapibus venenatis nec ac lectus. Aenean eget lacus
        tristique, sagittis sem sed, ultrices ante. Nulla iaculis et libero non
        auctor. Ut ultricies ultricies posuere Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Illum, quod. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Soluta magni architecto aperiam at, autem
        fugit.
      </p>
    </div>
    <div id="footer-right">
      <div id="faq">
        <h3>FAQ</h3>
        <p>Perguntas frequentes</p>
      </div>
      <div id="atendimento">
        <h3>Atendimento</h3>
        <p>
          email@email.com <br />
          (12) 3456-7890
        </p>
      </div>
    </div>
  </footer>
</template>


<script>
export default {
  name: 'Footer',
};
</script>


<style scoped>
footer {
  background-color: var(--bg-secondary-color);
  display: flex;
  justify-content: space-between;
  color: var(--txt-primary-color);
  padding: 20px 50px;
}

footer h3 {
  text-align: left;
  font-weight: 600;
  margin-bottom: 5px;
}

#footer-left {
  width: 80%;
}

#footer-right {
  display: flex;
  flex-direction: column;
}

#faq {
  margin-bottom: 10px;
}

@media (max-width: 700px) {
  footer {
    flex-direction: column;
  }
  #footer-left,
  #footer-right {
    width: 100%;
    margin: auto;
  }
  #footer-right {
    margin-top: 30px;
    justify-content: space-between;
    flex-direction: row;
  }
}
</style>