# Please read Coding Project 16 notes below:
Test entry: Name: Belvedere, Price: 50, Description: Polish vodka made from the finest rye and pure water. Known for its smooth, clean taste and subtly sweet finish.

Some components and commits are missing because I believe I accomplished expectations of the project...

As I completed task 2 I Rendered the ProductList and AddProductForm components inside the App component.
Then, passed the list of products as props to ProductList.

I used the map() function to render a the details for each product. (as advised in Task 3)

Task 4 says a product item component should receive a single product’s data as props and display its name, price, and description in JSX. (my products display on screen)

Task 5 says to ensure each ProductItem in the list is given a unique key prop using the id of each product and I used key id=

Task 6 This component will include a form with input fields for name, price, and description. On form submission, add a new product to the list in App.
Use useState to manage the form’s input fields and reset them after submission. (this component was created and functions work)


Ignore the rest, thank you!
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
