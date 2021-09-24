/// <reference types="cypress" />

import HomePage from "./pageObjects/HomePage";
import WomenCategory from "./pageObjects/WomenCategory";

describe('Order Test',() => {
    it('Go to HomePage', () => {
        
        const home = new HomePage();
        home.visit();
        cy.title().should('equal', "My Store");       
       
    });
    it('Go to Women Category', () => {
        
        const home = new HomePage();
        home.clickWomenCategory();
        cy.title().should('equal', 'Women - My Store')

    });

    it('Sort By Price', () => {
        
        const filter = 'Price: Lowest first';
        const womenPage = new WomenCategory();
        womenPage.filterByProductSort(filter);
        womenPage.sortSelect().should('contain', filter);

    });

    it('Sort By inStock', () => {
        
        const filter = 'In stock';
        const womenPage = new WomenCategory();
        womenPage.selectListView().click();
        womenPage.filterByProductSort(filter);
        womenPage.sortSelect().should('contain', filter);

    });


   

});