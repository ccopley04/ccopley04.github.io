import java.io.File;
import java.io.IOException;
import java.util.Collections;
import java.util.Optional;
import java.util.Scanner;

import javafx.application.Application;
import javafx.collections.FXCollections;
import javafx.collections.ListChangeListener;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.scene.control.Alert.AlertType;
import javafx.scene.control.Button;
import javafx.scene.control.ButtonType;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.Background;
import javafx.scene.layout.BackgroundFill;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.HBox;
import javafx.scene.layout.VBox;
import javafx.scene.paint.Color;
import javafx.stage.Stage;

/**
 * This class creates a JavaFX form that allows you to submit start-up ideas.
 *
 * @author Caleb Copley
 * @version 1.0
 */
public class NotesApp extends Application {

    /**
     * Main method, launchs the application.
     *
     * @param args arguments from user input
     */
    public static void main(String[] args) {
        launch(args);
    }

    private int editIndex = -1;
    private final int width = 200;

    private Label problemPrompt = new Label("What is the problem?");
    private TextField problem = new TextField("");

    private Label customerPrompt = new Label("Who is the target customer?");
    private TextField customer = new TextField("");

    private Label urgencyPrompt = new Label("How badly does the customer NEED this problem fixed (1-10)?");
    private TextField urgency = new TextField("");

    private Label sizePrompt = new Label("How many people do you know who might experience this problem?");
    private TextField size = new TextField("");

    private Label marketPrompt = new Label("How big is the target market?");
    private TextField market = new TextField("");

    private Label competitionPrompt = new Label("Who are the competitors/existing solutions?");
    private TextField competition = new TextField("");

    private Label effortPrompt = new Label("How much effort will this problem take to solve (1-10)?");
    private TextField effort = new TextField("");

    private Label editing = new Label("");

    private ImageView pic = new ImageView(new Image(
            "https://upload.wikimedia.org/wikipedia/commons/1/19/Thought-2123970_1920.jpg"));

    /**
     * Method that creates and runs the application.
     *
     * @param mainStage the stage that will be used for the Scene
     */
    public void start(Stage mainStage) {
        pic.setFitHeight(150.0);
        pic.setFitWidth(150.0);
        File ideaFile = new File("ideas.txt");
        mainStage.setTitle("Problem Ideation Form");
        VBox ideaLabels = new VBox(10);
        ObservableList<Idea> ideas = FXCollections.observableArrayList();
        problem.setMaxWidth(width);
        customer.setMaxWidth(width);
        urgency.setMaxWidth(width);
        market.setMaxWidth(width);
        competition.setMaxWidth(width);
        effort.setMaxWidth(width);
        size.setMaxWidth(width);
        ideas.addListener((ListChangeListener<Idea>) listener -> {
            ideaLabels.getChildren().removeAll(ideaLabels.getChildren());
            for (Idea idea : ideas) {
                Label newLabel = new Label(idea.toString());
                ideaLabels.getChildren().add(newLabel);
                newLabel.setOnMouseClicked(event -> {
                    int index = ideas.indexOf(idea);
                    Alert a = new Alert(AlertType.CONFIRMATION);

                    ButtonType removeButton = new ButtonType("Remove");
                    ButtonType editButton = new ButtonType("Edit");

                    a.getButtonTypes().setAll(removeButton, editButton, ButtonType.CANCEL);

                    a.setHeaderText("Options");
                    a.setContentText("Select whether you want to remove the idea at index " + index
                            + ", edit the idea at index " + index + ", or cancel and do nothing.");
                    Optional<ButtonType> choice = a.showAndWait();
                    if (choice.get() == ButtonType.CANCEL || choice.get() == null) {
                        return;
                    } else if (choice.get() == removeButton) {
                        ideas.remove(idea);
                        return;
                    }
                    problem.setText(idea.getProblem());
                    customer.setText(idea.getTargetCustomer());
                    urgency.setText(idea.getCustomerNeed() + "");
                    size.setText(idea.getKnownPeopleWithProblem() + "");
                    market.setText(idea.getTargetMarketSize() + "");
                    competition.setText(idea.getCompetitors());
                    effort.setText(idea.getEffort() + "");
                    editing.setText("Currently editing the idea at index " + index);
                    editIndex = index;
                });
            }
        });

        ideasFromList(ideaFile, ideas);
        Button btn1 = new Button("Confirm Idea Addition");
        btn1.setStyle("-fx-background-color:rgb(90, 169, 54); -fx-text-fill:rgb(0, 0, 0);");
        btn1.setOnAction(new EventHandler<ActionEvent>() {
            public void handle(ActionEvent event) {
                try {
                    if (problem.getCharacters().toString().equals("")
                            || customer.getCharacters().toString().equals("")
                            || competition.getCharacters().toString().equals("")) {
                        throw new Exception();
                    }

                    int urgencyInt = Integer.parseInt(urgency.getCharacters().toString());
                    int sizeInt = Integer.parseInt(size.getCharacters().toString());
                    int marketInt = Integer.parseInt(market.getCharacters().toString());
                    int effortInt = Integer.parseInt(effort.getCharacters().toString());
                    if (urgencyInt < 1 || sizeInt < 0 || marketInt < 0
                            || effortInt < 1 || effortInt > 10 || urgencyInt > 10) {
                        throw new Exception();
                    }

                    Idea idea = new Idea(problem.getCharacters().toString(),
                            customer.getCharacters().toString(), urgencyInt,
                            sizeInt, marketInt, competition.getCharacters().toString(), effortInt);
                    if (editIndex == -1) {
                        ideas.add(idea);
                    } else {
                        ideas.set(editIndex, idea);
                        editIndex = -1;
                        editing.setText("");
                    }
                    clearTextFields();
                } catch (Exception e) {
                    Alert a = new Alert(Alert.AlertType.ERROR);
                    a.setHeaderText("Invalid Input");
                    a.setContentText("One or more entries are invalid.");
                    a.showAndWait();
                }
            }
        });
        Button btn2 = new Button("Sort List Of Ideas");
        btn2.setStyle("-fx-background-color:rgb(90, 169, 54); -fx-text-fill:rgb(0, 0, 0);");
        btn2.setOnAction(event -> {
            Collections.sort(ideas);
            editIndex = -1;
            editing.setText("");
            clearTextFields();
        });
        Button btn3 = new Button("Reset Form and Delete File");
        btn3.setStyle("-fx-background-color:rgb(90, 169, 54); -fx-text-fill:rgb(0, 0, 0);");
        btn3.setOnAction(new EventHandler<ActionEvent>() {
            public void handle(ActionEvent event) {
                Alert a = new Alert(AlertType.CONFIRMATION);
                a.setHeaderText("Confirmation Required");
                a.setContentText("Are you sure you want to reset the form?\n"
                        + "Press Okay to clear the form and delete ideas.txt.\nClick Cancel otherwise.");
                Optional<ButtonType> choice = a.showAndWait();
                if (choice.get() == ButtonType.CANCEL || choice == null) {
                    return;
                }
                ideaFile.delete();
                ideas.clear();
                editing.setText("");
                editIndex = -1;
                clearTextFields();
            }
        });

        Button btn4 = new Button("Save List Of Ideas");
        btn4.setStyle("-fx-background-color:rgb(90, 169, 54); -fx-text-fill:rgb(0, 0, 0);");
        btn4.setOnAction(event -> FileUtil.saveIdeasToFile(ideas, ideaFile));

        VBox center = new VBox();
        VBox btnRoot = new VBox(20);
        VBox layer0 = new VBox();
        HBox btnLayer1 = new HBox(45);
        HBox btnLayer2 = new HBox(30);

        btnLayer1.getChildren().addAll(btn1, btn2);
        btnLayer2.getChildren().addAll(btn3, btn4);

        btnRoot.getChildren().addAll(btnLayer1, btnLayer2);

        center.getChildren().addAll(problemPrompt, problem, customerPrompt, customer,
                urgencyPrompt, urgency, sizePrompt, size, marketPrompt, market,
                competitionPrompt, competition, effortPrompt, effort,
                new Label("\n\n"), btnRoot, editing, pic);

        BorderPane root = new BorderPane(center, null, ideaLabels, layer0, null);
        root.setBackground(new Background(new BackgroundFill(Color.LIGHTBLUE, null, null)));
        BorderPane.setAlignment(center, Pos.CENTER);
        Scene scene = new Scene(root, 600, 600);

        mainStage.setScene(scene);

        mainStage.show();
    }

    /**
     * Method that clears all TextFields.
     *
     */
    private void clearTextFields() {
        problem.clear();
        customer.clear();
        competition.clear();
        urgency.clear();
        size.clear();
        market.clear();
        effort.clear();
    }

    /**
     * Method that takes all ideas from the text file and saves them to current
     * List.
     *
     * @param ideaFile The file with all ideas
     * @param ideas    The List to add the ideas too
     */
    private void ideasFromList(File ideaFile, ObservableList<Idea> ideas) {
        Scanner fileReader = null;
        try {
            fileReader = new Scanner(ideaFile);
            while (fileReader.hasNextLine()) {
                fileReader.nextLine();
                String problemInput = fileReader.nextLine().split(":")[1].trim();
                String customerInput = fileReader.nextLine().split(":")[1].trim();
                String needInput = fileReader.nextLine().split(":")[1].trim();
                String sizeInput = fileReader.nextLine().split(":")[1].trim();
                String marketInput = fileReader.nextLine().split(":")[1].trim();
                String competitionInput = fileReader.nextLine().split(":")[1].trim();
                String effortInput = fileReader.nextLine().split(":")[1].trim();
                ideas.add(new Idea(problemInput, customerInput, Integer.parseInt(needInput),
                        Integer.parseInt(sizeInput), Integer.parseInt(marketInput),
                        competitionInput, Integer.parseInt(effortInput)));
                if (fileReader.hasNextLine()) {
                    fileReader.nextLine();
                }
            }
        } catch (IOException e) {
            e.getMessage();
        } finally {
            if (fileReader != null) {
                fileReader.close();
            }
        }
    }
}
