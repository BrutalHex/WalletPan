using Microsoft.EntityFrameworkCore.Migrations;

namespace WalletPan.Data.Migrations
{
    public partial class InitialCreate2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CryptoCurrencyServer_CurrencyType_CryptoCurrencyEntityKey",
                schema: "dbo",
                table: "CryptoCurrencyServer");

            migrationBuilder.DropIndex(
                name: "IX_CryptoCurrencyServer_CryptoCurrencyEntityKey",
                schema: "dbo",
                table: "CryptoCurrencyServer");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CurrencyType",
                schema: "dbo",
                table: "CurrencyType");

            migrationBuilder.DropColumn(
                name: "CryptoCurrencyEntityKey",
                schema: "dbo",
                table: "CryptoCurrencyServer");

            migrationBuilder.RenameTable(
                name: "CurrencyType",
                schema: "dbo",
                newName: "CryptoCurrency",
                newSchema: "dbo");

            migrationBuilder.RenameColumn(
                name: "CurrencyType_Title",
                schema: "dbo",
                table: "CryptoCurrency",
                newName: "CryptoCurrency_Title");

            migrationBuilder.RenameColumn(
                name: "CurrencyType_Icon",
                schema: "dbo",
                table: "CryptoCurrency",
                newName: "CryptoCurrency_Icon");

            migrationBuilder.RenameColumn(
                name: "CurrencyType_Key",
                schema: "dbo",
                table: "CryptoCurrency",
                newName: "CryptoCurrency_Key");

            migrationBuilder.AddColumn<int>(
                name: "CryptoCurrency_Key",
                schema: "dbo",
                table: "CryptoCurrencyServer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_CryptoCurrency",
                schema: "dbo",
                table: "CryptoCurrency",
                column: "CryptoCurrency_Key");

            migrationBuilder.CreateIndex(
                name: "IX_CryptoCurrencyServer_CryptoCurrency_Key",
                schema: "dbo",
                table: "CryptoCurrencyServer",
                column: "CryptoCurrency_Key");

            migrationBuilder.AddForeignKey(
                name: "FK_CryptoCurrencyServer_CryptoCurrency_CryptoCurrency_Key",
                schema: "dbo",
                table: "CryptoCurrencyServer",
                column: "CryptoCurrency_Key",
                principalSchema: "dbo",
                principalTable: "CryptoCurrency",
                principalColumn: "CryptoCurrency_Key",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CryptoCurrencyServer_CryptoCurrency_CryptoCurrency_Key",
                schema: "dbo",
                table: "CryptoCurrencyServer");

            migrationBuilder.DropIndex(
                name: "IX_CryptoCurrencyServer_CryptoCurrency_Key",
                schema: "dbo",
                table: "CryptoCurrencyServer");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CryptoCurrency",
                schema: "dbo",
                table: "CryptoCurrency");

            migrationBuilder.DropColumn(
                name: "CryptoCurrency_Key",
                schema: "dbo",
                table: "CryptoCurrencyServer");

            migrationBuilder.RenameTable(
                name: "CryptoCurrency",
                schema: "dbo",
                newName: "CurrencyType",
                newSchema: "dbo");

            migrationBuilder.RenameColumn(
                name: "CryptoCurrency_Title",
                schema: "dbo",
                table: "CurrencyType",
                newName: "CurrencyType_Title");

            migrationBuilder.RenameColumn(
                name: "CryptoCurrency_Icon",
                schema: "dbo",
                table: "CurrencyType",
                newName: "CurrencyType_Icon");

            migrationBuilder.RenameColumn(
                name: "CryptoCurrency_Key",
                schema: "dbo",
                table: "CurrencyType",
                newName: "CurrencyType_Key");

            migrationBuilder.AddColumn<int>(
                name: "CryptoCurrencyEntityKey",
                schema: "dbo",
                table: "CryptoCurrencyServer",
                type: "int",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_CurrencyType",
                schema: "dbo",
                table: "CurrencyType",
                column: "CurrencyType_Key");

            migrationBuilder.CreateIndex(
                name: "IX_CryptoCurrencyServer_CryptoCurrencyEntityKey",
                schema: "dbo",
                table: "CryptoCurrencyServer",
                column: "CryptoCurrencyEntityKey");

            migrationBuilder.AddForeignKey(
                name: "FK_CryptoCurrencyServer_CurrencyType_CryptoCurrencyEntityKey",
                schema: "dbo",
                table: "CryptoCurrencyServer",
                column: "CryptoCurrencyEntityKey",
                principalSchema: "dbo",
                principalTable: "CurrencyType",
                principalColumn: "CurrencyType_Key",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
