# MSSQL Client - Windows Desktop Application

A native Windows desktop application built with **WPF** and **.NET 8** to explore, document, and manage SQL Server database objects like tables, views, stored procedures, and functions — all in one place.

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
`C#` · `.NET 8` · `WPF` · `ASP.NET Web API` · `MVVM` · `Redis` · `Microsoft SQL Server`

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

- **Desktop Client**: WPF (.NET 8), MVVM Pattern, ModernWPF UI
- **Backend API**: .NET 8 Web API
- **Database**: Microsoft SQL Server
- **Cache (Optional)**: Redis
- **Data Access**: Dapper ORM

---

## ⚙️ Getting Started

### ✅ Prerequisites

- Windows 10/11
- .NET 8 SDK
- Visual Studio 2022 (or higher)
- SQL Server (any edition)

### 🔧 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/mssql-client.git
   cd mssql-client
   ```

2. **Configure the API connection:**
   - Open `src/Client/MSSQL.Client.WPF/appsettings.json`
   - Update the `PrimaryUrl` and `SecondaryUrl` if needed (default: `http://localhost:5000`)

3. **Start the Backend API:**
   ```bash
   cd src/Services/API
   dotnet run
   ```
   The API will start on `http://localhost:5000` and `https://localhost:5001`

4. **Run the WPF Application:**
   - Open `mssql.sln` in Visual Studio
   - Set `MSSQL.Client.WPF` as the startup project
   - Press `F5` to run

   **OR** using command line:
   ```bash
   cd src/Client/MSSQL.Client.WPF
   dotnet run
   ```

### 📝 Database Configuration

Update the connection string in `src/Services/API/appsettings.json`:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=YOUR_SERVER;Database=YOUR_DATABASE;Trusted_Connection=True;"
  }
}
```

---

## 💻 Usage

1. **Select a Database**: Use the dropdown at the top to select which database to explore
2. **Navigate Objects**: The left menu displays all database objects in a tree structure:
   - Tables
   - Views
   - Stored Procedures
   - Functions (Scalar, Aggregate, Table-Valued)
   - Schemas
   - Triggers
3. **View Details**: Click any object to see detailed information:
   - Columns, indexes, foreign keys, constraints
   - SQL CREATE scripts
   - Object metadata and properties
4. **Add Documentation**: Add or update descriptions for tables, columns, procedures, and parameters

---

## 🏗️ Project Structure

```
MSSQL/
├── src/
│   ├── Client/
│   │   └── MSSQL.Client.WPF/         # WPF Desktop Application
│   │       ├── Views/                # XAML Views
│   │       ├── ViewModels/           # MVVM ViewModels
│   │       ├── Models/               # Data Models
│   │       ├── Services/             # API Services
│   │       ├── Infrastructure/       # MVVM Base Classes
│   │       └── Styles/               # UI Styles
│   │
│   ├── Services/
│   │   └── API/                      # .NET 8 Web API
│   │       ├── Controllers/          # API Endpoints
│   │       ├── Repository/           # Data Access Layer
│   │       ├── Domain/               # Domain Models
│   │       └── Service/              # Business Logic
│   │
│   └── Tools/
│       └── Redis-x64-5.0.14.1.msi   # Redis Installer (Optional)
│
└── mssql.sln                         # Visual Studio Solution
```

---

## 🎨 Key Features of the WPF Client

- **Modern UI**: Built with ModernWPF for a contemporary Windows 11-style interface
- **MVVM Architecture**: Clean separation of concerns with ViewModels, Models, and Views
- **Resizable Split Pane**: Adjustable navigation and content areas
- **Real-time Navigation**: Click-to-navigate through database objects
- **Tab-based Details**: View different aspects (columns, indexes, FK, scripts) in separate tabs
- **Error Handling**: Graceful error messages and loading indicators
- **Dependency Injection**: Built-in DI container for service management
- **Async/Await**: Non-blocking UI with asynchronous data loading

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 📧 Contact

For any questions or suggestions, please open an issue in the repository.

---

## 🎥 Application Walkthrough

Watch the demo: https://www.youtube.com/watch?v=zmoWUqMj7ys
*(Note: Video shows the previous Angular version. WPF version provides similar functionality with native Windows performance)*
