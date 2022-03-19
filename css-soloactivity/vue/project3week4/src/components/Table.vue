<template>
  <body>
    <h2>Types of Bananas</h2>
    <p>Here is a sample of the different types of bananas and how they taste</p>

    <table>
      <tr>
        <th>Name</th>
        <th>Color</th>
        <th>Taste</th>
      </tr>
      <tr>
        <td>Cavendish Banana</td>
        <td>Yellow</td>
        <td>Slightly sweet</td>
      </tr>
      <tr>
        <td>Pisang Raja</td>
        <td>Yellow Orange</td>
        <td>Honey-flavored custard</td>
      </tr>
      <tr>
        <td>Red Banana</td>
        <td>reddish-purple</td>
        <td>slight raspberry</td>
      </tr>
    </table>
  </body>
</template>

<style scoped>
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd !important;
}

th,
td {
  text-align: left;
  padding: 16px;
}
tr:nth-child(odd) {
  background-color: #bed9e9;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>
