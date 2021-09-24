class WomenCategory{

    
    filterByProductSort(value){
        let productSort = cy.get('#selectProductSort');
        productSort.select(value);
    }
    sortSelect(){
        return cy.get('#selectProductSort');;
    }

    selectListView(){
        return cy.xpath("//a[contains(@title, 'List')]");
    }

}
export default WomenCategory;   