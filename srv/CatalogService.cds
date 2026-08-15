using { anubhav.db.master, anubhav.db.transaction } from '../db/datamodel';


service CatalogService @(path:'/CatalogService') {
   
    entity EmployeeSet as projection on master.employees;
    entity ProductSet as projection on master.product;
    entity SupplierSet as projection on master.businesspartner;
    entity PurchaseItemSet as projection on transaction.poitems;
    entity PurchaseOrderSet as projection on transaction.purchaseorder;


}
