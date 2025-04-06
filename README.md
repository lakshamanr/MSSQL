# MSSQL Client Web Application

A web client built with **Angular** and **.NET 8** to explore, document, and manage SQL Server database objects like tables, views, stored procedures, and functions — all in one place.

---

## 🧠 Why This Exists

We talk about code documentation, functional docs, and design flows — but **SQL documentation is always left behind**.

We write stored procedures, and functions, and define columns in tables. Sure, we can add comments in SQL scripts, but:
- There's no native way to track where columns are used.
- There’s no centralized view for understanding or maintaining SQL structures.
- Existing tools are *either too expensive* or *too limited* for most teams.

So after a lot of struggle and spare time tinkering, I decided to **build something simple, free, and helpful** for everyone.

This app:
- Gives you a clear view of your SQL Server schema
- Helps you document tables, columns, and logic in one place
- Makes life easier for devs, DBAs, and tech writers

Of course, it's not perfect — but that’s the beauty of open source. **Fork it, build it your way, and make it better**.  
Thanks for checking it out — just trying to give a little something back to the dev community 💙

**Skills used:**  
`C#` · `.NET Core` · `ASP.NET Web API` · `Redis` · `Microsoft SQL Server`

---

## 🚀 Features

- Tree view of all SQL Server objects
- Clickable navigation to detailed views of:
  - Tables
  - Views
  - Stored Procedures
  - Functions
- Add and update documentation for SQL entities
- Error handling during data fetches
- Lightweight, fast, and customizable

---

## 🧰 Technologies Used

- **Frontend**: Angular, TypeScript, RxJS  
- **Backend**: .NET 8 Web API  
- **Database**: Microsoft SQL Server  
- **Cache (Optional)**: Redis

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
