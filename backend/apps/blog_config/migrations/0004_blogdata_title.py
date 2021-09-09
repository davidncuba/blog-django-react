# Generated by Django 3.2.7 on 2021-09-06 14:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("blog_config", "0003_auto_20210906_1431"),
    ]

    operations = [
        migrations.AddField(
            model_name="blogdata",
            name="title",
            field=models.CharField(
                blank=True,
                help_text="If you want you can insert a site title",
                max_length=255,
                null=True,
                verbose_name="Title Site",
            ),
        ),
    ]
