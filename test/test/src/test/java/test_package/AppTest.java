package test1;

import static org.junit.Assert.assertTrue;

import org.junit.Test;

/**
 * Unit test for simple App.
 */
import static org.junit.Assert.*;

import org.junit.Test;

public class AppTest
{

    @Test
    public void testApp(){
        App app = new App();
        String results = app.sayHello("gacl");
        assertEquals("Hello gacl!",results);
    }

}
