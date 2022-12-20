# Generated by Django 4.1.4 on 2022-12-17 08:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserAspects',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('regNo', models.BigIntegerField()),
                ('asp1', models.CharField(max_length=100)),
                ('asp2', models.CharField(max_length=100)),
                ('asp3', models.CharField(max_length=100)),
                ('asp4', models.CharField(max_length=100)),
                ('asp5', models.CharField(max_length=100)),
            ],
            options={
                'db_table': 'useraspects',
            },
        ),
    ]
