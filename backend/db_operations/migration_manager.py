from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand
from src.app import create_minimal_app
from src.database import db

app = create_minimal_app()
migrate = Migrate(app, db)
manager = Manager(app)
manager.add_command('db', MigrateCommand)

if __name__ == '__main__':
    manager.run()
