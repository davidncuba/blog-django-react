# Generated by Django 3.2.7 on 2021-09-06 14:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("blog_config", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="BlogData",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("nome", models.CharField(max_length=50, verbose_name="nome")),
                (
                    "logo",
                    models.ImageField(
                        default="images/logo/default.png",
                        help_text="Upload a product image",
                        upload_to="images/logo",
                        verbose_name="image",
                    ),
                ),
                (
                    "alt_text",
                    models.CharField(
                        blank=True,
                        help_text="Please add alturnative text",
                        max_length=255,
                        null=True,
                        verbose_name="Alturnative text",
                    ),
                ),
            ],
            options={
                "verbose_name": "BlogData",
                "verbose_name_plural": "BlogDatas",
            },
        ),
    ]
