
import { Pool } from 'pg';

const pool = new Pool({
  connectionString:"postgres://vackmlox:2yeYlrCDsKQ07BOUK07ps2QfJgaD945N@ella.db.elephantsql.com/vackmlox"
});

export default pool;