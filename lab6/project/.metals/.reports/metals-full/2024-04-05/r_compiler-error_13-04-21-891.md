file://<WORKSPACE>/Rule.java
### java.util.NoSuchElementException: next on empty iterator

occurred in the presentation compiler.

presentation compiler configuration:
Scala version: 3.3.1
Classpath:
<HOME>/Library/Caches/Coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/scala3-library_3/3.3.1/scala3-library_3-3.3.1.jar [exists ], <HOME>/Library/Caches/Coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/scala-library/2.13.10/scala-library-2.13.10.jar [exists ]
Options:



action parameters:
uri: file://<WORKSPACE>/Rule.java
text:
```scala
package task_2;

public class Rule {
    String[][] rule1;
    String[][] rule2;
    
    public Rule() {
        this.rule1 = new String[][] {
            {"**", "R", "2"},
            {"*", "L", "3"},
            {"/", "L", "3"},
            {"+", "L", "4"},
            {"-", "L", "4"},
            {">>", "L", "5"},
            {"<<", "L", "5"},
            {">", "L", "6"},
            {"<", "L", "6"},
            {"!=", "L", "7"},
            {"&&", "L", "8"},
            {"||", "L", "8"}
        };

        this.rule2 = new String[][] {
            {"**", "R", "2"},
            {"*", "R", "3"},
            {"/", "R", "3"},
            {"+", "R", "3"},
            {"-", "R", "3"},
            {">>", "R", "4"},
            {"<<", "R", "4"},
            {">", "L", "5"},
            {"<", "L", "5"},
            {"!=", "L", "6"},
            {"&&", "L", "7"},
            {"||", "L", "7"}
        };
    }
    public String[][] getRule1(){
        return rule1;
    }
    public String[][] getRule2(){
        return rule2;
    }
}

```



#### Error stacktrace:

```
scala.collection.Iterator$$anon$19.next(Iterator.scala:973)
	scala.collection.Iterator$$anon$19.next(Iterator.scala:971)
	scala.collection.mutable.MutationTracker$CheckedIterator.next(MutationTracker.scala:76)
	scala.collection.IterableOps.head(Iterable.scala:222)
	scala.collection.IterableOps.head$(Iterable.scala:222)
	scala.collection.AbstractIterable.head(Iterable.scala:933)
	dotty.tools.dotc.interactive.InteractiveDriver.run(InteractiveDriver.scala:168)
	scala.meta.internal.pc.MetalsDriver.run(MetalsDriver.scala:45)
	scala.meta.internal.pc.PcCollector.<init>(PcCollector.scala:44)
	scala.meta.internal.pc.PcSemanticTokensProvider$Collector$.<init>(PcSemanticTokensProvider.scala:61)
	scala.meta.internal.pc.PcSemanticTokensProvider.Collector$lzyINIT1(PcSemanticTokensProvider.scala:61)
	scala.meta.internal.pc.PcSemanticTokensProvider.Collector(PcSemanticTokensProvider.scala:61)
	scala.meta.internal.pc.PcSemanticTokensProvider.provide(PcSemanticTokensProvider.scala:90)
	scala.meta.internal.pc.ScalaPresentationCompiler.semanticTokens$$anonfun$1(ScalaPresentationCompiler.scala:109)
```
#### Short summary: 

java.util.NoSuchElementException: next on empty iterator