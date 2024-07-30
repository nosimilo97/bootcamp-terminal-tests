export default function mostProfitableDepartment(salesDataList) {
    let result = {};
    
    // Calculate total sales per department
    for (let i = 0; i < salesDataList.length; i++) {
        const department = salesDataList[i].department;
        const sales = salesDataList[i].sales;
        result[department] = (result[department] || 0) + sales;
    }

    // Find the department with the highest total sales
    let mostProfitableDepartment = "";
    let maxSales = 0;
    for (const department in result) {
        if (result[department] > maxSales) {
            maxSales = result[department];
            mostProfitableDepartment = department;
        }
    }

    return mostProfitableDepartment;
}
