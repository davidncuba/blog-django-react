# Generated by Django 3.2.7 on 2021-09-08 12:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='slug',
            field=models.CharField(max_length=255, unique=True),
        ),
    ]
