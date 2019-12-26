using Microsoft.EntityFrameworkCore.Migrations;

namespace WalletPan.Data.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "dbo");

            migrationBuilder.CreateTable(
                name: "CurrencyType",
                schema: "dbo",
                columns: table => new
                {
                    CurrencyType_Key = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CurrencyType_Title = table.Column<string>(nullable: true),
                    CurrencyType_Icon = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CurrencyType", x => x.CurrencyType_Key);
                });

            migrationBuilder.CreateTable(
                name: "CryptoCurrencyServer",
                schema: "dbo",
                columns: table => new
                {
                    CryptoCurrencyServer_Key = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CryptoCurrencyServer_Title = table.Column<string>(nullable: true),
                    CryptoCurrencyServer_Address = table.Column<string>(nullable: true),
                    CryptoCurrencyEntityKey = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CryptoCurrencyServer", x => x.CryptoCurrencyServer_Key);
                    table.ForeignKey(
                        name: "FK_CryptoCurrencyServer_CurrencyType_CryptoCurrencyEntityKey",
                        column: x => x.CryptoCurrencyEntityKey,
                        principalSchema: "dbo",
                        principalTable: "CurrencyType",
                        principalColumn: "CurrencyType_Key",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CryptoCurrencyServer_CryptoCurrencyEntityKey",
                schema: "dbo",
                table: "CryptoCurrencyServer",
                column: "CryptoCurrencyEntityKey");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CryptoCurrencyServer",
                schema: "dbo");

            migrationBuilder.DropTable(
                name: "CurrencyType",
                schema: "dbo");
        }
    }
}
