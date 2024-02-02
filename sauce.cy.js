describe('открытие сайта', () => {
  it('Проверка открытия сайта', () => {
    cy.visit('https://practicesoftwaretesting.com/')
  })
})

describe('Проверка поиска', () => {
  it('Поиск информации', () => {
    cy.visit('https://practicesoftwaretesting.com/')
    cy.get('input[data-test="search-query"]').should('be.visible').type('Pliers{enter}')
    cy.get('a.card').should('be.visible')
  })
})

describe('Проверка фильтра категорий', () => {
  it('Проверка фильтра категорий', () => {
    cy.visit('https://practicesoftwaretesting.com/');   
    cy.contains('.checkbox label', 'Pliers').find('input[type="checkbox"]').check();
    cy.get('a.card').should('be.visible');
  });
});

describe('Проверка фильтра по цене', () => {
  it('Проверка фильтра по цене', () => {
    cy.visit('https://practicesoftwaretesting.com/');  
    cy.get('.ngx-slider-pointer-min').trigger('mousemove', 1).trigger('mouseup', { force: true });
    cy.get('.ngx-slider-pointer-max').trigger('mousemove', 100).trigger('mouseup', { force: true });
    cy.get('a.card').should('be.visible');
  });
});

describe('Проверка сортировки цены от низкой к высокой', () => {
  it('Сортировка цены от низкой к высокой', () => {
    cy.visit('https://practicesoftwaretesting.com/');
    cy.get('[data-test="sort"]').select('Price (Low - High)');
    cy.get('[data-test="product-price"]').should('exist');
  });
});

describe('Добавление товара в корзину', () => {
  it('Добавление товара в корзину', () => {
    cy.visit('https://practicesoftwaretesting.com/');
    cy.get('[data-test="product-01HNNFMNCK1E265HM61RTQ7TVG"]').click();
    cy.get('[data-test="add-to-cart"]').click();
  });
});

