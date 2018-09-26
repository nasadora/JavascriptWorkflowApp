var s=RMPApplication.getVariable("awarded_supplier");
var j=RMPApplication.getVariable("supplier_2");
var t=RMPApplication.getVariable("supplier_3");
var i=RMPApplication.getVariable("supplier_4");
var k=RMPApplication.getVariable("awarded_supplier_5");
var c=0;

if(s!=c && j!=c && t!=c && i!=c && k!=c)
{
id_my_summary.id_total_supplier[0].setValue("" + 5);
}
else if (s!=c && j!=c && t!=c  && i!=c && k==c)
{
id_my_summary.id_total_supplier[0].setValue("" + 4);
}
else if (s!=c && j!=c && t!=c  && i==c && k==c)
{
id_my_summary.id_total_supplier[0].setValue("" + 3);
}
else if(s!=c && j!=c && t==c  && i==c && k==c)
{
id_my_summary.id_total_supplier[0].setValue("" + 2);
}
else if(s!=c && j==c && t==c  && i==c && k==c)
{
id_my_summary.id_total_supplier[0].setValue("" + 1);
}
