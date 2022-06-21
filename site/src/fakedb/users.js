export default {
  users: [
    {
      id: '0',
      admin: true,
      personalInfo: {
        name: 'adm',
        email: 'admin@azulaops.com',
        password: 'admin',
        CPF: '12345678900',
        telephone: '(16) 3233-4893',
        gender: 'não-binário',
      }
    },
    {
      id: '1',
      admin: false,
      personalInfo: {
        name: 'cliente',
        email: 'cliente@gmail.com',
        password: 'cliente',
        CPF: '98765432100',
        telephone: '(16) 3233-4893',
        gender: 'não-binário',
      },
      address: {
        cep: '37950000',
        city: 'São Carlos',
        state: 'São Paulo',
        district: 'Centro',
        street: 'Adolfo Catani',
        number: '233',
        complement: 'apto 95'
      },
      card: {
        number: '1234567890123456',
        holderName: 'Cliente da Silva',
        holderCPF: '98765432100',
        billingAddress: 'Rua Adolfo Catani 233, apartamento 12, São Carlos, SP',
        expiringDate: '11/26'
      }
    }
  ]
}