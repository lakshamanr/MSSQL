# MSSQL Client Web Application

This project is a web client application built with **Angular** for managing and navigating various SQL Server database objects. It features a clean UI with a left-hand menu for easy access to different database schemas and objects.

---

## 🚀 Features

- Load and display database objects in a hierarchical tree view
- Navigate to detailed views of:
  - Tables
  - Views
  - Stored Procedures
  - Functions
- Robust error handling during data loading

---

## 🧰 Technologies Used

- **Frontend**: Angular, TypeScript, RxJS
- **Backend**: .NET 8 Web API

---

## ⚙️ Getting Started

### ✅ Prerequisites

- Node.js (v14 or higher)
- Angular CLI
- .NET 8 SDK

### 🔧 Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mssql-client-webapp.git
   cd mssql-client-webapp
2 . Install frontend dependencies:  npm install

3. Build the project: ng build
4. Run the application: ng serve
5. Open your browser:http://localhost:4200


## Usage

- The left menu will load and display database objects.
- Click on any database object to navigate to its detailed view.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, please open an issue or contact the repository 

Click any object (table, view, etc.) to view its details.

Errors while fetching data are gracefully handled and shown to the user.
