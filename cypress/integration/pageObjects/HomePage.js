require('cypress-xpath');

class HomePage {

        visit(){
            cy.visit('/');
        }

        clickWomenCategory(){
            let womenCategory =  cy.xpath("//a[contains(@title, 'Women')]");
            womenCategory.click();
        }
}
export default HomePage;