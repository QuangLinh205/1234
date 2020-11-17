using Microsoft.EntityFrameworkCore.Migrations;
using System;

namespace WeightVehicle.Data.Migrations
{
    public partial class update_user : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "SealDes",
                table: "Weights",
                newName: "sealDes");

            migrationBuilder.RenameColumn(
                name: "SealCount",
                table: "Weights",
                newName: "sealCount");

            migrationBuilder.RenameColumn(
                name: "MoocCode",
                table: "Weights",
                newName: "moocCode");

            migrationBuilder.RenameColumn(
                name: "LotNumber",
                table: "Weights",
                newName: "lotNumber");

            migrationBuilder.RenameColumn(
                name: "DeliveryCode",
                table: "Weights",
                newName: "deliveryCode");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Weights",
                newName: "id");
            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "int", nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DoB = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UserName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    //NormalizedUserName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    //NormalizedEmail = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    //EmailConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    //SecurityStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    //ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    //PhoneNumberConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    //TwoFactorEnabled = table.Column<bool>(type: "bit", nullable: false),
                    //LockoutEnd = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    //LockoutEnabled = table.Column<bool>(type: "bit", nullable: false),
                    //AccessFailedCount = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "sealDes",
                table: "Weights",
                newName: "SealDes");

            migrationBuilder.RenameColumn(
                name: "sealCount",
                table: "Weights",
                newName: "SealCount");

            migrationBuilder.RenameColumn(
                name: "moocCode",
                table: "Weights",
                newName: "MoocCode");

            migrationBuilder.RenameColumn(
                name: "lotNumber",
                table: "Weights",
                newName: "LotNumber");

            migrationBuilder.RenameColumn(
                name: "deliveryCode",
                table: "Weights",
                newName: "DeliveryCode");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Weights",
                newName: "Id");
        }
    }
}